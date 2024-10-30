
import SuccessContent from "./SuccessContent"

interface SuccessPageProps {
  searchParams: { planName?: string };
}

export default function SuccessPage({ searchParams }: SuccessPageProps) {
  const planName = searchParams.planName ? decodeURIComponent(searchParams.planName) : "Your Subscription";
  
  return <SuccessContent planName={planName} />;
}

