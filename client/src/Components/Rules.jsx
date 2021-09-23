import Navbar from "./Navbar";

export default function Rules() {
  return (
    <div className="rulesMain">
      <Navbar />
      These are the rules:
      <br />
      <div className="rules">
        •Jokes are listed from most votes to least votes.
        <br /> •You can up-vote the jokes you like and down-vote the jokes don't
        like.
        <br /> •Create your own joke and let the internet decide if it's funny!
        <br />
        •Warning: these jokes are not monitored. Read at your own risk.
      </div>
    </div>
  );
}
