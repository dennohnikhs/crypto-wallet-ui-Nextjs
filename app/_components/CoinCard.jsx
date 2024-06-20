import React from 'react';


const CoinCard = ({ details }) => {
  return (
    <div className=' bg-cr-dark-black-main  rounded-xl h-auto w-[340px] mx-auto p-[1rem] '>
      <div className='flex flex-row gap-5'>
        <div>
          <p className='lg:text-2xl text-white'>{details.name}</p>
          <p className='text-cr-green text-md'>Market Gap: {details.gap}</p>
          <p className='text-sm text-[#9ca3af]'>Replies:{details.replies}</p>
          <p className=' text-[#9ca3af] overflow-hidden text-xs'>{details.desc}</p>
          <p className=' text-[#6b7990] overflow-hidden text-xs'>Deployed by:{details.desc}</p>

        </div>
      </div>
      <div className='flex justify-between items-center pt-3'>
        <div className='flex flex-row items-center gap-3'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="#636365" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" x2="22" y1="12" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon text-[#636365]" fill="#636365" stroke='#636365'>
              <path clip-rule="evenodd" d="M1.65 11.562c6.442-2.807 10.738-4.657 12.888-5.551C20.675 3.458 21.95 3.015 22.782 3c.182-.004.591.041.856.256.223.182.285.427.314.599.03.172.066.563.037.87-.332 3.494-1.771 11.974-2.503 15.888-.31 1.656-.92 2.211-1.51 2.266-1.284.118-2.259-.848-3.502-1.663-1.945-1.275-3.043-2.069-4.931-3.313-2.182-1.438-.768-2.228.476-3.52.325-.338 5.98-5.481 6.089-5.948.014-.058.026-.275-.103-.39-.13-.115-.32-.076-.457-.045-.196.045-3.303 2.099-9.322 6.162-.882.605-1.681.9-2.397.885-.789-.017-2.307-.446-3.435-.813-1.384-.45-2.484-.688-2.388-1.452.05-.398.598-.805 1.644-1.22Z" fill="url(#telegram__a)" fill-rule="evenodd" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="telegram__a" x1="12" x2="12" y1="3" y2="22.742">
                  <stop stop-color="#636365" />
                  <stop offset="1" stop-color="#636365" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none">
              <path d="M7.548 21.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0 0 24 4.305a9.815 9.815 0 0 1-2.828.775 4.94 4.94 0 0 0 2.165-2.723 9.865 9.865 0 0 1-3.127 1.195 4.929 4.929 0 0 0-8.391 4.491A13.98 13.98 0 0 1 1.67 2.898a4.928 4.928 0 0 0 1.525 6.573A4.88 4.88 0 0 1 .96 8.855v.063a4.926 4.926 0 0 0 3.95 4.826 4.914 4.914 0 0 1-2.223.085 4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 0 19.288a13.941 13.941 0 0 0 7.548 2.208" fill="#1DA1F2" />
            </svg>
          </div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="blue" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
      </div>


    </div>
  );
}



export default CoinCard;
