import { Header } from "@/components/Header";
import { RecommendChannel } from "./components/RecommendChannel";
import { Button } from "./components/ui/button";
import DiamondPlus from "@/assets/icons/diamond_plus.svg";
import Inventory from "@/assets/icons/inventory.svg";
import Twitter from "@/assets/icons/twitter.svg";
import Docs from "@/assets/icons/document.svg";
import Fire from "@/assets/icons/fire.svg";
import Banner from "@/assets/images/banner.png";
import VideoPreview from "./components/VideoPreview";
import React from "react";

console.log(Inventory);

const channel = {
  id: "1",
  name: "Shad",
  avatar: "",
  game: "League of Legends",
};

const actions = [
  {
    icon: <DiamondPlus />,
    label: "Create",
  },
  {
    icon: <Inventory />,
    label: "Inventory",
  },
  {
    icon: <Twitter />,
    label: "Twitter",
  },
  {
    icon: <Docs />,
    label: "Docs",
  },
];

function App() {
  return (
    <>
      <Header />
      <main className="flex h-full flex-grow">
        <section className="flex flex-col gap-4 min-w-[200px] px-4 justify-between mb-6">
          <div className="w-full flex-grow">
            <h3 className="uppercase text-lg font-bold text-[FairyMuffin] mb-2">Recommended channels</h3>
            <div className="flex flex-col gap-3">
              <RecommendChannel channel={channel} />
              <RecommendChannel channel={channel} />
              <RecommendChannel channel={channel} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {actions.map((action, index) => (
              <div key={index} className="flex items-center text-2xl font-[FairyMuffin]">
                {React.cloneElement(action.icon, { width: "40px", height: "40px" })}
                <Button variant="link">
                  <span className="text-xl">{action.label}</span>
                </Button>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col flex-grow">
          <img src={Banner} className="mx-auto" />
          <div className="flex gap-2 items-center mb-4">
            {/* @ts-ignore */}
            <Fire width="50px" height="50px" />
            <h2 className="font-medium text-4xl font-[FairyMuffin]">Recommended anime live</h2>
          </div>
          <div className="grid grid-cols-3 flex-grow">
            <VideoPreview channel={channel} />
            <VideoPreview channel={channel} />
            <VideoPreview channel={channel} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
