import React from 'react'

type Props = {}

function TryHackId({}: Props) {
  return (
    <div>
        <input type="url" name="url" id="TryHackId"  placeholder='Type your roll no  here ..' className='border-b w-96 focus:outline-none py-1 focus:border-b-2 peer text-white bg-black'  />
    </div>
  )
}

export default TryHackId