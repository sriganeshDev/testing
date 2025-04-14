import React from 'react'
import { CardData } from '../../utils/CardData'
import CardCom from '../../Components/ProductCard/CardCom'
const UserDashboard = () => {
  return (
    
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:p-10 lg:gap-6 max-md:px-4 max-sm:p-2 mb-[100px]">
      {CardData.map((value) => (
        <div className="w-full md:w-[70%] lg:w-[100%] mx-auto" key={value.id}>
          <CardCom value={value} />
          
        </div>
      ))}
    </div>

    
  )
}

export default UserDashboard
