// import { ExamChart } from '@/components/molecules'
import { DashboardStatsGrid } from '@/components/organisms'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStatsGrid />
      {/* < ExamChart /> */}
    </div>
  )
}

export default Dashboard