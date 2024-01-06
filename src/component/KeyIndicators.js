import React from 'react';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const KeyIndicators = () => {
    return (
        <div className='p-24'>
            <div>
                <h1 className='py-2 text-5xl font-bold'>PM Vishwakarma</h1>
                <p className='py-1 text-3xl font-normal' >Key indicators</p>
            </div>
            <div className="flex flex-wrap gap-10">
                <div className='bg-orange-200 p-5 w-50 h-50'>
                    <ContentPasteIcon className='text-white bg-red-400 rounded-full' />
                    <h2>58,81,834</h2>
                    <p>No of Applications Submitted</p>
                </div>
                <div className='bg-blue-200 p-5 w-50 h-50'>
                    {/* logo */}
                    <ContentPasteIcon />
                    <h2>10,19,371</h2>
                    <p>Stage 1 Verification Completed: Gram Panchayat or ULB Level.</p>
                </div>
                <div className='bg-yellow-200 p-5 w-50 h-50'>
                    {/* logo */}
                    <ContentPasteIcon />
                    <h2>4,31,350</h2>
                    <p>Stage 2 Verification Completed: District Implementation Committee</p>
                </div>
                <div className='bg-red-200 p-5 w-50 h-50'>
                    {/* logo */}
                    <ContentPasteIcon />
                    <h2>2,01,503</h2>
                    <p>Stage 3 Verification Completed: Screening Committee</p>
                </div>
                <div className='bg-green-200 p-5 w-50 h-50'>
                    {/* logo */}
                    <ContentPasteIcon />
                    <h2>1,73,417</h2>
                    <p>No of Applicants Successfully Registered</p>
                </div>
            </div>
        </div>
    );
};

export default KeyIndicators;
