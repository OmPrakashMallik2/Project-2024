import React from 'react'
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ApprovalRoundedIcon from '@mui/icons-material/ApprovalRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';

function HowToRegister() {
    return (
        <div className='p-24 bg-gradient-to-br from-blue-200 to-green-200 via-purple-100 bg-radial'>
            <div className='text-center pb-10'>
                <h1 className='py-2 text-5xl font-bold'>How to avail the Scheme Benefits</h1>
                <p className='py-1 text-s text-slate-600 font-medium' >The PM Vishwakarma scheme is a holistic scheme and envisages to provide end-to-end support to the artisans and craftspeople in scaling up of their products and services and professional well-being</p>
            </div>
            <div className="grid grid-cols-4 gap-20 pt-10">
                <div className='bg-white pl-8 py-12 rounded-lg'>
                    <div className='bg-orange-400 w-fit rounded-full p-4'>
                        <ContentPasteIcon className='' />
                    </div>
                    <h2 className='text-xl font-bold pt-4'>Step 1:</h2>
                    <h2 className='text-xl font-bold'>Mobile and Aadhaar Verification</h2>
                    <p className='text-s text-slate-600 font-medium'>Do your mobile authentication and aadhaar EKYC</p>
                </div>
                <div className='bg-white pl-8 py-12 rounded-lg'>
                    <div className='bg-blue-400 w-fit rounded-full p-4'>
                        <ApprovalRoundedIcon className='' />
                    </div>
                    <h2 className='text-xl font-bold pt-4'>Step 2:</h2>
                    <h2 className='text-xl font-bold'>Artisan Register Form</h2>
                    <p className='text-s text-slate-600 font-medium'>Apply for the registration form</p>
                </div>
                <div className='bg-white pl-8 py-12 rounded-lg'>
                    <div className='bg-purple-400 w-fit rounded-full p-4'>
                        <WorkspacePremiumIcon />
                    </div>
                    <h2 className='text-xl font-bold pt-4'>Step 3:</h2>
                    <h2 className='text-xl font-bold'>PM Verification Certificate</h2>
                    <p className='text-s text-slate-600 font-medium'>Download the PM Verification Digital ID and Certificate</p>
                </div>
                <div className='bg-white pl-8 py-12 rounded-lg'>
                    <div className='bg-green-400 w-fit rounded-full p-4'>
                        <InventoryRoundedIcon className='' />
                    </div>
                    <h2 className='text-xl font-bold pt-4'>Step 4:</h2>
                    <h2 className='text-xl font-bold'>Apply For Scheme Components</h2>
                    <p className='text-s text-slate-600 font-medium'>Start Applying for different components</p>
                </div>
            </div>
        </div>
    )
}

export default HowToRegister
