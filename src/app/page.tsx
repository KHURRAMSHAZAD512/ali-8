import SectionTitle from "@/components/SectionTitle"

export default function Home() {
  return (
    <section className="text-center py-20 px-6">
      <SectionTitle title="Welcome to FinVerse" subtitle="Your Global Financial Companion" />
      <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
        Track live exchange rates, analyze trends, and make smart global financial decisions — all in one platform.
      </p>
    </section>
  )
}
