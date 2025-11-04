export default function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-4xl font-bold text-blue-600">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>
    </div>
  );
}
