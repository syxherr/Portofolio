import ContributionCard from "./ContributionCard";
import useGitHubContributions from "../../hooks/useGitHubContributions";

export default function GitHubCard() {
  const data = useGitHubContributions("syxherr");
  if (!data) return null;
  return (
    <ContributionCard
      label="GitHub activity"
      linkLabel="GitHub"
      href="https://github.com/syxherr"
      days={data.days}
      total={data.total}
    />
  );
}