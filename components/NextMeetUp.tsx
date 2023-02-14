import React from 'react'
import Image from 'next/image'

type Props = {
    name: string,
    title: string,
    image: string,
    subtitle: string
    topic: string
}

const SpeakerElement = (props: Props) => {
    return (
        <div className='mt-8 md:w-1/3 w-10/12 h-auto flex flex-col justify-center items-center'>
            <div className='w-32 h-32 rounded-full overflow-hidden'>

                <Image
                    src={props.image}
                    alt={props.name}
                    width={128}
                    height={128}
                />

            </div>
            <div className='text-xl font-bold mt-4'>
                {props.name}
            </div>
            <div className='text-sm my-2'>
                {props.title}
            </div>
            <div className='font-bold'>
                {props.subtitle}
            </div>
            <div className='mt-2'>
                {props.topic}
            </div>

        </div>
    )
}


const NextMeetUp = () => {
  return (
    <div className='w-full mt-48 m-auto'>
        <div className='w-full h-auto flex flex-col font-web3 justify-center items-center'>
            <div className='
            w-2/3 px-8 py-8 font-bold text-3xl
            md:text-5xl '>
                23.02.2023 - Delft - 18:00
            </div>
            <div className='text-xl px-2'>
               Location: The Social Hub, right next to Delft Central Station.
            </div>
            <div className='mt-12 md:w-3/5 w-11/12'>
                This evening we have a panel discussion with speakers from the Web 3 ecosystem. After the panel discussion 
                there will be several speakers from the web3 industry.
            </div>
            <div className='mt-8 w-full flex flex-col md:flex-row justify-center items-center'>
                <SpeakerElement
                    name='Digital Dave'
                    title='Co-Organiser of Web3 Partners'
                    image='/images/dave.png'
                    subtitle='Icon Foundation'
                    topic='Dave is a web3 enthusiast and co-organiser of Web3 Partners. He is also a co-founder of the Dutch Web3 Foundation.'
                />
                <SpeakerElement
                    name='Paul Rouge'
                    title='Co-Organiser of Web3 Partners'
                    image='/images/paul2.png'
                    subtitle='Developer'
                    topic='Paul is a (web3) developer and co-organiser of Web3 Partners.'
                />
                <SpeakerElement
                    name='Justin Haylo'
                    title='Co-Organiser of Web3 Partners'
                    image='/images/justin.jpeg'
                    subtitle='Community Manager'
                    topic='Justin is the community leader of several web3 communities.'
                />
            </div>
        </div>
    </div>
  )
}

export default NextMeetUp