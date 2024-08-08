export default function servicePage({
  params,
}: {
  params: { service: string };
}) {
  const service = params.service;

  console.log(service);

  const data = {
    "content-creation": {},
    "sales-and-marketing": {},
    "website-develpment" :{}
  };

  return (
    <>
      <div className="min-h-screen items-center justify-center flex text-white ">
        {service}
      </div>
    </>
  );
}
