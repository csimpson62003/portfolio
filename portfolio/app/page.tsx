import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <main className=" px-4 py-20 mx-auto flex-grow flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold mb-4">
              "Sometimes in life, AI isnt the answer. Sometimes, you just need to turn it off and on again. If that doesnt work, redevelop from scratch." <h5 className="text-sm mb-2">- Caleb Miller</h5>
            </h3>
          <div>
            <Image
              src="/assets/placeholder.png"
              alt="Tech Image"
              width={500}
              height={500}
              className="rounded-lg"
            />
        </div> 
      </main>
    </div>
  );
}
