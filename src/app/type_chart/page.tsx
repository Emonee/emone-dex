import TypeChartTable from '@/components/tables/TypeChartTable'

export default function TypeChart () {
  return (
    <main className='p-5'>
      <h1 className='text-center text-4xl mb-9'>Type chart</h1>
      <section className='max-w-full overflow-x-auto max-h-[90vh]'>
        <TypeChartTable />
      </section>
    </main>
  )
}
