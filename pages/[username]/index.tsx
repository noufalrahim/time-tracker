import { Inter } from 'next/font/google'
import TinyCard from '../../components/TinyCard'
import Card from '../../components/Card'
import Navbar from '@/components/Navbar'
import React, { useEffect } from 'react'
import { MongoClient } from 'mongodb'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export default function Home(props: any) {

  const [time, setTime] = React.useState('');
  const [data, setData] = React.useState([]);
  const [userData, setUserData] = React.useState<any>({});
  const router = useRouter();

  const auth = router.query.auth;
  var isAuthenticated = false;

  if (auth === 'true') {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  useEffect(() => {
    setData(props.data);
    if(props.userData != undefined) {
      setUserData(props.userData);
    }
    else{
      setUserData({name: 'Jeremy Robson', image: 'https://iili.io/JRDJmkg.png'});
    }
    setTime('Daily');
  }, [])

  const handleTime = (e: any) => {
    setTime(e)
    console.log(time);
  }

  return (
    <>
    <div className='fixed top-0 w-full z-50 h-16'>
    <Navbar isAuthenticated={isAuthenticated}/>
    </div>
    <main className={`flex-row min-h-screen flex-col bg-[#0D1323] items-center justify-center px-56 py-32 ${inter.className}`}>
      <div className="lg:flex lg:flex-row md:flex md:flex-row xl:flex 2xl:flex-row flex flex-col items-center justify-center">
        <Card onChangeTime={handleTime} name={userData?.name} image={userData?.image} />
        <div className='flex flex-col items-center justify-center'>
          <div className='lg:flex lg:flex-row md:flex md:flex-row xl:flex 2xl:flex-row flex flex-col items-center justify-center'>
            {
              data.slice(0, 3).map(({ title, timeframes, image, bgColor, index }: {
                title: string,
                timeframes: {
                  daily: {
                    current: number,
                    previous: number
                  },
                  weekly: {
                    current: number,
                    previous: number
                  },
                  monthly: {
                    current: number,
                    previous: number
                  }
                },
                image: string,
                bgColor: string,
                index: number
              }) => {
                return (
                  time === 'Daily' ? (
                    <TinyCard key={index} title={title} timeframes={timeframes.daily} image={image} bgColor={bgColor} />
                  ) : time === 'Weekly' ? (
                    <TinyCard key={index} title={title} timeframes={timeframes.weekly} image={image} bgColor={bgColor} />
                  ) : (
                    <TinyCard key={index} title={title} timeframes={timeframes.monthly} image={image} bgColor={bgColor} />
                  )
                );
              })
            }
          </div>
          <div className='lg:flex lg:flex-row md:flex md:flex-row xl:flex 2xl:flex-row flex flex-col items-center justify-center'>
          {
              data.slice(3, 6).map(({ title, timeframes, image, bgColor, index }: {
                title: string,
                timeframes: {
                  daily: {
                    current: number,
                    previous: number
                  },
                  weekly: {
                    current: number,
                    previous: number
                  },
                  monthly: {
                    current: number,
                    previous: number
                  }
                },
                image: string,
                bgColor: string,
                index: number
              
              }) => {
                return (
                  time === 'Daily' ? (
                    <TinyCard key={index} title={title} timeframes={timeframes.daily} image={image} bgColor={bgColor} />
                  ) : time === 'Weekly' ? (
                    <TinyCard key={index} title={title} timeframes={timeframes.weekly} image={image} bgColor={bgColor} />
                  ) : (
                    <TinyCard key={index} title={title} timeframes={timeframes.monthly} image={image} bgColor={bgColor} />
                  )
                );
              })
            }
          </div>
        </div>
      </div>
    </main>
    </>
  )
}


export async function getServerSideProps(context: any) {
    const username = context.params.username;

    const client = await MongoClient.connect(process.env.MONGODB_URI!);
    const db = client.db();
    const Collection = db.collection('Time');
    var query = { username:  username || 'testuser'};
    var data = await Collection.find(query).toArray();

    const userCollection = db.collection('User');
    var userQuery = { username:  username || 'testuser'};
    var userData = await userCollection.findOne(userQuery);
    
    if(!userData) {
      query = { username:  'testuser'};
      data = await Collection.find(query).toArray();
      userQuery = { username:  'testuser'};
      userData = await userCollection.findOne(userQuery);
    }

    
    return {
        props: {
        data: data.map((data: any) => ({
            title: data.title,
            timeframes: data.timeframes,
            image: data.image,
            bgColor: data.bgColor,
            id: data._id.toString()
        })),
        userData: {
            name: userData?.name,
            image: userData?.image,
            username: userData?.username,
        },
    }
  }
}