import React from 'react';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const KeyIndicators = () => {
    return (
        <div className='p-24'>
            <div>
                <h1 className='py-2 text-5xl font-bold'>PM Vishwakarma</h1>
                <p className='py-1 text-3xl font-normal' >Key indicators</p>
            </div>
            <div className="grid grid-cols-4 gap-9 pt-10">
                <div className='bg-orange-200 pl-8 py-12 rounded-lg'>
                    <ContentPasteIcon className='' />
                    <h2 className='text-3xl font-bold'>58,81,834</h2>
                    <p className='text-base'>No of Applications Submitted</p>
                </div>
                <div className='bg-blue-200 pl-8 py-12 rounded-lg'>
                    {/* logo */}
                    <ContentPasteIcon className='' />
                    <h2 className='text-3xl font-bold'>10,19,371</h2>
                    <p className='text-base'>Stage 1 Verification Completed:</p>
                    <p className='text-base'>Gram Panchayat or ULB Level.</p>
                </div>
                <div className='bg-yellow-200 pl-8 py-12 rounded-lg'>
                    {/* logo */}
                    <ContentPasteIcon className='' />
                    <h2 className='text-3xl font-bold'>4,31,350</h2>
                    <p className='text-base'>Stage 2 Verification Completed:</p>
                    <p className='text-base'>District Implementation Committee</p>
                </div>
                <div className='bg-red-200 pl-8 py-12 rounded-lg'>
                    {/* logo */}
                    <ContentPasteIcon className='' />
                    <h2 className='text-3xl font-bold'>2,01,503</h2>
                    <p className='text-base'>Stage 3 Verification Completed:</p>
                    <p className='text-base'>Screening Committee</p>
                </div>
                <div className='bg-green-200 pl-8 py-12 rounded-lg'>
                    {/* logo */}
                    <ContentPasteIcon className='' />
                    <h2 className='text-3xl font-bold'>1,73,417</h2>
                    <p className='text-base'>No of Applicants Successfully Registered</p>
                </div>
            </div>
        </div>
    );
};

export default KeyIndicators;
