import React from 'react'
import Navbar from '../../components/Navbar'
import TinyInputBox from '@/components/TinyInputBox'
import { useRef } from 'react'
import { useRouter } from 'next/router'
export default function () {

  const router = useRouter();
  const username = router.query.username
  const code = router.query.code

  const currentDailyWorkUseRef = useRef<HTMLInputElement>(null)
  const currentDailyPlayUseRef = useRef<HTMLInputElement>(null)
  const currentDailyStudyUseRef = useRef<HTMLInputElement>(null)
  const currentDailyExerciseUseRef = useRef<HTMLInputElement>(null)
  const currentDailySocialUseRef = useRef<HTMLInputElement>(null)
  const currentDailySelfCareUseRef = useRef<HTMLInputElement>(null)

  const prevDailyWorkUseRef = useRef<HTMLInputElement>(null)
  const prevDailyPlayUseRef = useRef<HTMLInputElement>(null)
  const prevDailyStudyUseRef = useRef<HTMLInputElement>(null)
  const prevDailyExerciseUseRef = useRef<HTMLInputElement>(null)
  const prevDailySocialUseRef = useRef<HTMLInputElement>(null)
  const prevDailySelfCareUseRef = useRef<HTMLInputElement>(null)

  const currentWeeklyWorkUseRef = useRef<HTMLInputElement>(null)
  const currentWeeklyPlayUseRef = useRef<HTMLInputElement>(null)
  const currentWeeklyStudyUseRef = useRef<HTMLInputElement>(null)
  const currentWeeklyExerciseUseRef = useRef<HTMLInputElement>(null)
  const currentWeeklySocialUseRef = useRef<HTMLInputElement>(null)
  const currentWeeklySelfCareUseRef = useRef<HTMLInputElement>(null)

  const prevWeeklyWorkUseRef = useRef<HTMLInputElement>(null)
  const prevWeeklyPlayUseRef = useRef<HTMLInputElement>(null)
  const prevWeeklyStudyUseRef = useRef<HTMLInputElement>(null)
  const prevWeeklyExerciseUseRef = useRef<HTMLInputElement>(null)
  const prevWeeklySocialUseRef = useRef<HTMLInputElement>(null)
  const prevWeeklySelfCareUseRef = useRef<HTMLInputElement>(null)

  const currentMonthlyWorkUseRef = useRef<HTMLInputElement>(null)
  const currentMonthlyPlayUseRef = useRef<HTMLInputElement>(null)
  const currentMonthlyStudyUseRef = useRef<HTMLInputElement>(null)
  const currentMonthlyExerciseUseRef = useRef<HTMLInputElement>(null)
  const currentMonthlySocialUseRef = useRef<HTMLInputElement>(null)
  const currentMonthlySelfCareUseRef = useRef<HTMLInputElement>(null)

  const prevMonthlyWorkUseRef = useRef<HTMLInputElement>(null)
  const prevMonthlyPlayUseRef = useRef<HTMLInputElement>(null)
  const prevMonthlyStudyUseRef = useRef<HTMLInputElement>(null)
  const prevMonthlyExerciseUseRef = useRef<HTMLInputElement>(null)
  const prevMonthlySocialUseRef = useRef<HTMLInputElement>(null)
  const prevMonthlySelfCareUseRef = useRef<HTMLInputElement>(null)

  const nameInputRef = useRef<HTMLInputElement>(null)
  const [isNameValid, setIsNameValid] = React.useState(false);

  const [imageInput, setImageInput] = React.useState("");


  async function ImageHandler(event: any) {
    const [file] = event.target.files;

    if (file) {
      const base64 = await convertToBase64(file);
      setImageInput(base64 as string);
    }
  }

  function convertToBase64(file: any) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentDailyWork = currentDailyWorkUseRef.current?.value
    const currentDailyPlay = currentDailyPlayUseRef.current?.value
    const currentDailyStudy = currentDailyStudyUseRef.current?.value
    const currentDailyExercise = currentDailyExerciseUseRef.current?.value
    const currentDailySocial = currentDailySocialUseRef.current?.value
    const currentDailySelfCare = currentDailySelfCareUseRef.current?.value

    const prevDailyWork = prevDailyWorkUseRef.current?.value
    const prevDailyPlay = prevDailyPlayUseRef.current?.value
    const prevDailyStudy = prevDailyStudyUseRef.current?.value
    const prevDailyExercise = prevDailyExerciseUseRef.current?.value
    const prevDailySocial = prevDailySocialUseRef.current?.value
    const prevDailySelfCare = prevDailySelfCareUseRef.current?.value

    const currentWeeklyWork = currentWeeklyWorkUseRef.current?.value
    const currentWeeklyPlay = currentWeeklyPlayUseRef.current?.value
    const currentWeeklyStudy = currentWeeklyStudyUseRef.current?.value
    const currentWeeklyExercise = currentWeeklyExerciseUseRef.current?.value
    const currentWeeklySocial = currentWeeklySocialUseRef.current?.value
    const currentWeeklySelfCare = currentWeeklySelfCareUseRef.current?.value

    const prevWeeklyWork = prevWeeklyWorkUseRef.current?.value
    const prevWeeklyPlay = prevWeeklyPlayUseRef.current?.value
    const prevWeeklyStudy = prevWeeklyStudyUseRef.current?.value
    const prevWeeklyExercise = prevWeeklyExerciseUseRef.current?.value
    const prevWeeklySocial = prevWeeklySocialUseRef.current?.value
    const prevWeeklySelfCare = prevWeeklySelfCareUseRef.current?.value

    const currentMonthlyWork = currentMonthlyWorkUseRef.current?.value
    const currentMonthlyPlay = currentMonthlyPlayUseRef.current?.value
    const currentMonthlyStudy = currentMonthlyStudyUseRef.current?.value
    const currentMonthlyExercise = currentMonthlyExerciseUseRef.current?.value
    const currentMonthlySocial = currentMonthlySocialUseRef.current?.value
    const currentMonthlySelfCare = currentMonthlySelfCareUseRef.current?.value

    const prevMonthlyWork = prevMonthlyWorkUseRef.current?.value
    const prevMonthlyPlay = prevMonthlyPlayUseRef.current?.value
    const prevMonthlyStudy = prevMonthlyStudyUseRef.current?.value
    const prevMonthlyExercise = prevMonthlyExerciseUseRef.current?.value
    const prevMonthlySocial = prevMonthlySocialUseRef.current?.value
    const prevMonthlySelfCare = prevMonthlySelfCareUseRef.current?.value

    const name = nameInputRef.current?.value

    console.log(imageInput);
    const data = [
      {
        title: 'Work',
        timeframes: {
          daily: {
            current: currentDailyWork || '0',
            previous: prevDailyWork || '0'
          },
          weekly: {
            current: currentWeeklyWork || '0',
            previous: prevWeeklyWork || '0'
          },
          monthly: {
            current: currentMonthlyWork || '0',
            previous: prevMonthlyWork || '0'
          }
        },
        image: 'work',
        bgColor: '#ff8a5c',
        username: username,
      },
      {
        title: 'Play',
        timeframes: {
          daily: {
            current: currentDailyPlay || '0',
            previous: prevDailyPlay || '0'
          },
          weekly: {
            current: currentWeeklyPlay || '0',
            previous: prevWeeklyPlay || '0'
          },
          monthly: {
            current: currentMonthlyPlay || '0',
            previous: prevMonthlyPlay || '0'
          }
        },
        image: 'play',
        bgColor: '#56c2e6',
        username: username,
      },
      {
        title: 'Study',
        timeframes: {
          daily: {
            current: currentDailyStudy || '0',
            previous: prevDailyStudy || '0'
          },
          weekly: {
            current: currentWeeklyStudy || '0',
            previous: prevWeeklyStudy || '0'
          },
          monthly: {
            current: currentMonthlyStudy || '0',
            previous: prevMonthlyStudy || '0'
          }
        },
        image: 'study',
        bgColor: '#ff5c7c',
        username: username,
      },
      {
        title: 'Exercise',
        timeframes: {
          daily: {
            current: currentDailyExercise || '0',
            previous: prevDailyExercise || '0'
          },
          weekly: {
            current: currentWeeklyExercise || '0',
            previous: prevWeeklyExercise || '0'
          },
          monthly: {
            current: currentMonthlyExercise || '0',
            previous: prevMonthlyExercise || '0'
          }
        },
        image: 'exercise',
        bgColor: '#4acf8a',
        username: username,
      },
      {
        title: 'Social',
        timeframes: {
          daily: {
            current: currentDailySocial || '0',
            previous: prevDailySocial || '0'
          },
          weekly: {
            current: currentWeeklySocial || '0',
            previous: prevWeeklySocial || '0'
          },
          monthly: {
            current: currentMonthlySocial || '0',
            previous: prevMonthlySocial || '0'
          }
        },
        image: 'social',
        bgColor: '#7135d1',
        username: username,
      },
      {
        title: 'Self Care',
        timeframes: {
          daily: {
            current: currentDailySelfCare || '0',
            previous: prevDailySelfCare || '0'
          },
          weekly: {
            current: currentWeeklySelfCare || '0',
            previous: prevWeeklySelfCare || '0'
          },
          monthly: {
            current: currentMonthlySelfCare || '0',
            previous: prevMonthlySelfCare || '0'
          }
        },
        image: 'self-care',
        bgColor: '#f1c65b',
        username: username,
      }
    ]

    const response = await fetch('/api/addItems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })

    const responseData = await response.json()
    console.log(responseData);


    const userData = {
      username: username,
      password: code,
      name: name,
      image: imageInput
    }

    const resp = await fetch('/api/registerUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    const responseFromServer = await resp.json()
    console.log(responseFromServer);

  }


  return (
    <>
      <div className='fixed top-0 w-full z-50 h-16'>
        <Navbar isAuthenticated={true} />
      </div>
      <main className='bg-[#0D1323] min-h-screen text-center justify-center w-[30rem] md:w-full lg:w-full xl:w-full 2xl:w-full pt-10'>
        <form onSubmit={submitHandler}>
          <div className='w-1/5 justify-center mx-auto mt-[3rem] mb-[5rem]'>
            <div className='flex flex-col items-center justify-center'>
              <label className="cursor-pointer bg-blue-500 text-white p-4 py-24 rounded-full h-56 w-56 text-center transition-opacity hover:opacity-75">
                Upload Your Photo
                <input
                  type="file"
                  accept=".jpg, .png, .jpeg"
                  className="hidden"
                  onChange={event => ImageHandler(event)}
                  src={imageInput ? imageInput : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Color_icon_Light_Cornflower_blue.svg/1024px-Color_icon_Light_Cornflower_blue.svg.png"}
                />

              </label>
            </div>
            <div>
              <input className='bg-[#F5F5F5] mt-10 text-[#0D1323] rounded-md py-2 text-center justify-center text-[1rem] border-[#F5F5F5] border-2 w-full' type='text' placeholder='Name'
                ref={nameInputRef}
              />
            </div>
          </div>
          <div className='w-1/5 justify-center mx-auto'>
            <div>
              <h1 className='text-[#F5F5F5] text-[2rem] font-bold'>DAILY</h1>
              <div className='lg:flex lg:flex-row lg:justify-around lg:w-full lg:mx-auto lg:gap-96 hidden'>
                <h3 className='text-[#F5F5F5] text-[1rem] font-bold lg:hidden md:hidden xl:hidden 2xl:hidden'>
                  PREVIOUS
                </h3>
                <h3 className='text-[#F5F5F5] text-[1rem] font-bold ml-10 lg:hidden md:hidden xl:hidden 2xl:hidden'>
                  CURRENT
                </h3>
              </div>
              <div className='lg:flex lg:flex-row md:flex md:flex-row xl:flex 2xl:flex-row flex flex-col justify-center'>
                <div className='lg:border-r-4 lg:border-white/50 lg:border-dashed md:border-r-4 md:border-white/50 md:border-dashed xl:border-r-4 xl:border-white/50 xl:border-dashed 2xl:border-r-4 2xl:border-white/50 2xl:border-dashed'>
                  <h1 className='text-[#F5F5F5] text-[1rem] font-bold mt-10'>
                    PREVIOUS
                  </h1>
                  <div className='flex flex-row justify-center'>
                    <TinyInputBox placeholder={`WORK`} name={'work'} type={'number'} ref={prevDailyWorkUseRef} borderColor='#ff8a5c' />
                    <TinyInputBox placeholder={'PLAY'} name={'play'} type={'number'} ref={prevDailyPlayUseRef} borderColor='#56c2e6' />
                    <TinyInputBox placeholder={'STUDY'} name={'study'} type={'number'} ref={prevDailyStudyUseRef} borderColor='#ff5c7c' />
                  </div>
                  <div className='flex flex-row justify-center'>
                    <TinyInputBox placeholder={'EXERCISE'} name={'exercise'} type={'number'} ref={prevDailyExerciseUseRef} borderColor='#4acf8a' />
                    <TinyInputBox placeholder={'SOCIAL'} name={'social'} type={'number'} ref={prevDailySocialUseRef} borderColor='#7135d1' />
                    <TinyInputBox placeholder={'SELF CARE'} name={'selfCare'} type={'number'} ref={prevDailySelfCareUseRef} borderColor='#f1c65b' />
                  </div>
                </div>
                <div>
                  <h1 className='text-[#F5F5F5] text-[1rem] font-bold mt-10'>
                    CURRENT
                  </h1>
                  <div className='flex flex-row justify-center'>
                    <TinyInputBox placeholder={`WORK`} name={'work'} type={'number'} ref={currentDailyWorkUseRef} borderColor='#ff8a5c' />
                    <TinyInputBox placeholder={'PLAY'} name={'play'} type={'number'} ref={currentDailyPlayUseRef} borderColor='#56c2e6' />
                    <TinyInputBox placeholder={'STUDY'} name={'study'} type={'number'} ref={currentDailyStudyUseRef} borderColor='#ff5c7c' />
                  </div>
                  <div className='flex flex-row justify-center'>
                    <TinyInputBox placeholder={'EXERCISE'} name={'exercise'} type={'number'} ref={currentDailyExerciseUseRef} borderColor='#4acf8a' />
                    <TinyInputBox placeholder={'SOCIAL'} name={'social'} type={'number'} ref={currentDailySocialUseRef} borderColor='#7135d1' />
                    <TinyInputBox placeholder={'SELF CARE'} name={'selfCare'} type={'number'} ref={currentDailySelfCareUseRef} borderColor='#f1c65b' />
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[3rem]'>
              <h1 className='text-[#F5F5F5] text-[2rem] font-bold'>WEEKLY</h1>
              <div className='lg:flex lg:flex-row lg:justify-around lg:w-full lg:mx-auto lg:gap-96 hidden'>
                <h3 className='text-[#F5F5F5] text-[1rem] font-bold lg:hidden md:hidden xl:hidden 2xl:hidden'>
                  PREVIOUS
                </h3>
                <h3 className='text-[#F5F5F5] text-[1rem] font-bold ml-10 lg:hidden md:hidden xl:hidden 2xl:hidden'>
                  CURRENT
                </h3>
              </div>
              <div className='lg:flex lg:flex-row md:flex md:flex-row xl:flex 2xl:flex-row flex flex-col justify-center'>
                <div className='lg:border-r-4 lg:border-white/50 lg:border-dashed md:border-r-4 md:border-white/50 md:border-dashed xl:border-r-4 xl:border-white/50 xl:border-dashed 2xl:border-r-4 2xl:border-white/50 2xl:border-dashed'>
                  <h1 className='text-[#F5F5F5] text-[1rem] font-bold mt-10'>
                    PREVIOUS
                  </h1>
                  <div className='flex flex-row justify-center '>
                    <TinyInputBox placeholder={'WORK'} name={'work'} type={'number'} ref={prevWeeklyWorkUseRef} borderColor='#ff8a5c' />
                    <TinyInputBox placeholder={'PLAY'} name={'play'} type={'number'} ref={prevWeeklyPlayUseRef} borderColor='#56c2e6' />
                    <TinyInputBox placeholder={'STUDY'} name={'study'} type={'number'} ref={prevWeeklyStudyUseRef} borderColor='#ff5c7c' />
                  </div>
                  <div className='flex flex-row justify-center'>
                    <TinyInputBox placeholder={'EXERCISE'} name={'exercise'} type={'number'} ref={prevWeeklyExerciseUseRef} borderColor='#4acf8a' />
                    <TinyInputBox placeholder={'SOCIAL'} name={'social'} type={'number'} ref={prevWeeklySocialUseRef} borderColor='#7135d1' />
                    <TinyInputBox placeholder={'SELF CARE'} name={'selfCare'} type={'number'} ref={prevWeeklySelfCareUseRef} borderColor='#f1c65b' />
                  </div>
                </div>
                <div>
                  <h1 className='text-[#F5F5F5] text-[1rem] font-bold mt-10'>
                    CURRENT
                  </h1>
                  <div className='flex flex-row justify-center '>
                    <TinyInputBox placeholder={'WORK'} name={'work'} type={'number'} ref={currentWeeklyWorkUseRef} borderColor='#ff8a5c' />
                    <TinyInputBox placeholder={'PLAY'} name={'play'} type={'number'} ref={currentWeeklyPlayUseRef} borderColor='#56c2e6' />
                    <TinyInputBox placeholder={'STUDY'} name={'study'} type={'number'} ref={currentWeeklyStudyUseRef} borderColor='#ff5c7c' />
                  </div>
                  <div className='flex flex-row justify-center'>
                    <TinyInputBox placeholder={'EXERCISE'} name={'exercise'} type={'number'} ref={currentWeeklyExerciseUseRef} borderColor='#4acf8a' />
                    <TinyInputBox placeholder={'SOCIAL'} name={'social'} type={'number'} ref={currentWeeklySocialUseRef} borderColor='#7135d1' />
                    <TinyInputBox placeholder={'SELF CARE'} name={'selfCare'} type={'number'} ref={currentWeeklySelfCareUseRef} borderColor='#f1c65b' />
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[3rem]'>
              <h1 className='text-[#F5F5F5] text-[2rem] font-bold'>MONTHLY</h1>
              <div className='lg:flex lg:flex-row lg:justify-around lg:w-full lg:mx-auto lg:gap-96 hidden'>
                <h3 className='text-[#F5F5F5] text-[1rem] font-bold lg:hidden md:hidden xl:hidden 2xl:hidden'>
                  PREVIOUS
                </h3>
                <h3 className='text-[#F5F5F5] text-[1rem] font-bold ml-10 lg:hidden md:hidden xl:hidden 2xl:hidden'>
                  CURRENT
                </h3>
              </div>
              <div className='lg:flex lg:flex-row md:flex md:flex-row xl:flex 2xl:flex-row flex flex-col justify-center'>
                <div className='lg:border-r-4 lg:border-white/50 lg:border-dashed md:border-r-4 md:border-white/50 md:border-dashed xl:border-r-4 xl:border-white/50 xl:border-dashed 2xl:border-r-4 2xl:border-white/50 2xl:border-dashed'>
                  <h1 className='text-[#F5F5F5] text-[1rem] font-bold mt-10'>
                    PREVIOUS
                  </h1>
                  <div className='flex flex-row justify-center'>
                    <TinyInputBox placeholder={'WORK'} name={'work'} type={'number'} ref={prevMonthlyWorkUseRef} borderColor='#ff8a5c' />
                    <TinyInputBox placeholder={'PLAY'} name={'play'} type={'number'} ref={prevMonthlyPlayUseRef} borderColor='#56c2e6' />
                    <TinyInputBox placeholder={'STUDY'} name={'study'} type={'number'} ref={prevMonthlyStudyUseRef} borderColor='#ff5c7c' />
                  </div>
                  <div className='flex flex-row justify-center'>
                    <TinyInputBox placeholder={'EXERCISE'} name={'exercise'} type={'number'} ref={prevMonthlyExerciseUseRef} borderColor='#4acf8a' />
                    <TinyInputBox placeholder={'SOCIAL'} name={'social'} type={'number'} ref={prevMonthlySocialUseRef} borderColor='#7135d1' />
                    <TinyInputBox placeholder={'SELF CARE'} name={'selfCare'} type={'number'} ref={prevMonthlySelfCareUseRef} borderColor='#f1c65b' />
                  </div>
                </div>
                <div>
                  <h1 className='text-[#F5F5F5] text-[1rem] font-bold mt-10'>
                    CURRENT
                  </h1>
                  <div className='flex flex-row justify-center'>
                    <TinyInputBox placeholder={'WORK'} name={'work'} type={'number'} ref={currentMonthlyWorkUseRef} borderColor='#ff8a5c' />
                    <TinyInputBox placeholder={'PLAY'} name={'play'} type={'number'} ref={currentMonthlyPlayUseRef} borderColor='#56c2e6' />
                    <TinyInputBox placeholder={'STUDY'} name={'study'} type={'number'} ref={currentMonthlyStudyUseRef} borderColor='#ff5c7c' />
                  </div>
                  <div className='flex flex-row justify-center'>
                    <TinyInputBox placeholder={'EXERCISE'} name={'exercise'} type={'number'} ref={currentMonthlyExerciseUseRef} borderColor='#4acf8a' />
                    <TinyInputBox placeholder={'SOCIAL'} name={'social'} type={'number'} ref={currentMonthlySocialUseRef} borderColor='#7135d1' />
                    <TinyInputBox placeholder={'SELF CARE'} name={'selfCare'} type={'number'} ref={currentMonthlySelfCareUseRef} borderColor='#f1c65b' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type='submit' className='bg-[#F5F5F5] mb-20 mt-10 text-[#0D1323] rounded-md py-2 text-center justify-center text-[1rem] border-[#F5F5F5] border-2 w-1/5 hover:bg-[#bababa]'>
            SUBMIT
          </button>
        </form>
      </main>
    </>
  )
}
