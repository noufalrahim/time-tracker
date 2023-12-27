import { Inter } from 'next/font/google'
import TinyCard from '../components/TinyCard'
import Card from '../components/Card'
import Navbar from '@/components/Navbar'
import React, { useEffect } from 'react'
const inter = Inter({ subsets: ['latin'] })

const data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    },
    "image": "work",
    "bgColor": "#ff8a5c"
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    },
    "image": "play",
    "bgColor": "#56c2e6"
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    },
    "image": "study",
    "bgColor": "#ff5c7c"
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    },
    "image": "exercise",
    "bgColor": "#4acf8a"
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    },
    "image": "social",
    "bgColor": "#7135d1"
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    },
    "image": "self-care",
    "bgColor": "#f1c65b"
  }
]

export default function Home() {
  const [time, setTime] = React.useState('');

  useEffect(() => {
    setTime('Daily')
  }, [])

  const handleTime = (e: any) => {
    setTime(e)
    console.log(time);
  }

  return (
    <>
    <Navbar />
    <main className={`flex-row min-h-screen flex-col bg-[#0D1323] items-center justify-center px-56 py-32 ${inter.className}`}>
      <div className="lg:flex lg:flex-row items-center justify-center">
        <Card onChangeTime={handleTime}/>
        <div className='flex flex-col items-center justify-center'>
          <div className='lg:flex lg:flex-row items-center justify-center'>
            {
              data.slice(0, 3).map(({ title, timeframes, image, bgColor }, index) => {
                return (
                  time === 'Daily' ? (
                    <TinyCard key={index} title={title} timeframes={timeframes.daily} image={image} bgColor={bgColor} />
                  ) : time === 'Monthly' ? (
                    <TinyCard key={index} title={title} timeframes={timeframes.weekly} image={image} bgColor={bgColor} />
                  ) : (
                    <TinyCard key={index} title={title} timeframes={timeframes.monthly} image={image} bgColor={bgColor} />
                  )
                );
              })
            }
          </div>
          <div className='lg:flex lg:flex-row items-center justify-center'>
          {
              data.slice(3, 6).map(({ title, timeframes, image, bgColor }, index) => {
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
