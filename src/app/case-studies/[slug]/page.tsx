export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen text-white bg-[#0a0a0a] p-10">
      <h1 className="text-4xl font-bold">
        {params.slug.replaceAll("-", " ")}
      </h1>
      <p className="mt-4 text-gray-400">
        This is your case study page.
      </p>
    </main>
  );
}