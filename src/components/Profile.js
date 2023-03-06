import React from 'react';
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <div class='px-5 py-5'>
    <div class='mb-10 sticky top-0 z-10'>
      <p class="px-5 font-semibold text-slate-500">
        Profile / <Link to="/">Main Dashboard</Link>
      </p>
      <h1 class="px-5 text-4xl font-bold">Profile Page</h1>
      </div>
    </div>
  )
}
