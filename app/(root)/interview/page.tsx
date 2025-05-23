import Agent from "@/app/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
	const user = await getCurrentUser();

	return (
		<>
			<h3>Interview generation</h3>
			{/* <Agent userName="You" userId="user1" tyoe="generate" /> */}
			<Agent
        userName={user?.name!}
        userId={user?.id}
        // profileImage={user?.profileURL}
        type="generate"
      />
		</>
	);
};

export default Page;
