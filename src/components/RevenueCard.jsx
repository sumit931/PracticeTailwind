import React from 'react'

const RevenueCard = () => {
  return (
    <div class='bg-white rounded shadow-md'>
        <div class = 'text-gray-500 text-xs p-2 flex justify-between'>
            <div>
            Amount Pending
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
            </svg>,
            </div>

        </div>
        <div className='flex justify-between p-2'>
            <div>₹2,312.23</div>
            <div class = 'text-xs underline text-blue-500'>13 Order(s)</div>
        </div>
    </div>
  )
}

export default RevenueCard