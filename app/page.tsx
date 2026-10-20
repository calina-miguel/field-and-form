import { FunnelLanding } from "./funnel-landing";

export const metadata = { title: "Field & Form", description: "Turn a browse signal into a more relevant route through functional food and wellbeing." };

export default function Page(){ return <FunnelLanding config={{ name: "Field & Form", monogram: "FN", eyebrow: "WHAT FITS YOUR EVERYDAY", title: "Find your daily fit.", body: "Functional food & wellness", accent: "#b46725", soft: "#fff0dc", steps: ["Name your daily priority","See the relevant product set","Save a shortlist that fits"], cta: "Build my shortlist", outcome: "Daily fit" }} />; }

