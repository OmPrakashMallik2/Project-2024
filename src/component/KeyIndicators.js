import React from 'react';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

const KeyIndicators = () => {
    return (
        <div className='p-24'>
            <div>
                <h1 className='py-2 text-5xl font-bold'>PM Vishwakarma</h1>
                <p className='py-1 text-3xl font-normal' >Key indicators</p>
            </div>
            <div className="grid grid-cols-4 gap-9 pt-10">

                <div className='bg-orange-200 pl-8 p-8 rounded-lg'>
                    <div className='bg-orange-300 w-fit rounded-full p-4'>
                        <ContentPasteIcon className='' />
                    </div>
                    <h2 className='text-3xl font-bold pt-5'>58,81,834</h2>
                    <p className='text-base'>No of Applications Submitted</p>
                </div>

                <div className='bg-blue-200 pl-8 p-8 rounded-lg'>
                    {/* logo */}
                    <div className='bg-blue-300 w-fit rounded-full p-4'>
                        <TaskAltRoundedIcon className='' />
                    </div>
                    <h2 className='text-3xl font-bold pt-5'>10,19,371</h2>
                    <p className='text-base'>Stage 1 Verification Completed:</p>
                    <p className='text-base'>Gram Panchayat or ULB Level.</p>
                </div>

                <div className='bg-yellow-200 pl-8 p-8 rounded-lg'>
                    <div className='bg-yellow-300 w-fit rounded-full p-4'>
                        <InventoryRoundedIcon className='' />
                    </div>
                    <h2 className='text-3xl font-bold pt-5'>4,31,350</h2>
                    <p className='text-base'>Stage 2 Verification Completed:</p>
                    <p className='text-base'>District Implementation Committee</p>
                </div>
                <div className='bg-red-200 pl-8 p-8 rounded-lg'>
                    <div className='bg-red-300 w-fit rounded-full p-4'>
                        <VerifiedRoundedIcon className='' />
                    </div>
                    <h2 className='text-3xl font-bold pt-5'>2,01,503</h2>
                    <p className='text-base'>Stage 3 Verification Completed:</p>
                    <p className='text-base'>Screening Committee</p>
                </div>
                <div className='bg-green-200 pl-8 p-8 rounded-lg'>
                    <div className='bg-green-300 w-fit rounded-full p-4'>
                        <ContactMailRoundedIcon className='' />
                    </div>
                    <h2 className='text-3xl font-bold pt-5'>1,73,417</h2>
                    <p className='text-base'>No of Applicants Successfully Registered</p>
                </div>
            </div>
        </div>
    );
};

export default KeyIndicators;
