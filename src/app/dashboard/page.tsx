"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Content from '../../components/Content';

type User = {
  subscriptionPlan: 'Free' | 'Pro' | 'Plus';
  // Add other properties as needed, like `email` or `name`
};

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!session) return;

      try {
        const response = await fetch(`https://localhost:3000/api/user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: session?.user?.email }),
        });
        if (response.status === 404) {
          router.push('/forbidden');
          return;
        }
        const data = await response.json();
        setUser(data.user);

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const timeout = setTimeout(() => {
      if (!user) {
        router.push('/forbidden');
      }
    }, 5000);

    fetchUser();
  }, [session]);

  if (!session) return <p>Loading...</p>;

  return (
    <div className='flex items-center justify-center flex-col p-10'>
      <h1>Welcome, {session?.user?.name}!</h1>
        <div className='flex flex-col items-center justify-center m-10'>
          {(user) &&(
            <div> 
              <Content plan={user.subscriptionPlan} />
            </div>

          )}
        </div>
    </div>
  );
};

export default Dashboard;
