"use client"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import Link from "next/link"
import { useRouter } from 'next/navigation';
import { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { FormEvent } from 'react'


export default function Component() {

  // const router = useRouter();
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const router = useRouter()
 
 
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  
    const formData = new FormData(event.currentTarget)
    const username = formData.get('username') as string
    const password = formData.get('password') as string



    router.push('/dashboard')
  
    // try {
    //   const response = await fetch('http://localhost:1010/authentication/select_user_for_loginnn', {
    //     method: 'POST',
    //     mode: "cors",
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password }),
    //   })
  
    //   const data = await response.json()
    //   if (data.data!=null) { 
    //     // console.log('Login successful:', data.data)
    //     alert ('Login Successful');
    //     router.push('/dashboard')
    //   } else {
    //     // const errorData = await response.json()
    //     // console.log('Login failed:', data)
    //     alert ('Password Or Email Error');
    //     // Handle errors
    //   }
    // } catch (error) {
    //   // console.error('An error occurred:', data)
    //   // Handle network errors
    // }
  }
  
 



  // const handleLogin = async () => {

  //   if (!username.trim() || !password.trim()) {
  //     alert('Username and password are required.');
  //     return; // Exit early if either field is empty
  //   }

  //   try {
  //     console.log(username,password);
  //     // Make a POST request to your REST API endpoint
  //     const response = await fetch('http://localhost:1010/authentication/select_user_for_loginnn', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         username: username,
  //         password: password
  //       }),
  //     });

  //     console.log(response);

  //     // if (response.ok) {
  //     //   // If login successful, navigate to the dashboard page
  //     //   router.push('/dashboard');
  //     // } else {
  //     //   // Handle unsuccessful login (e.g., show error message)
  //     //   console.error('Login failed');
  //     // }
  //   } catch (error) {
  //     console.error('Error occurred during login:', error);
  //   }
  // };
  

  return (
    <form onSubmit={handleSubmit}>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
          <CardDescription className="text-center">Enter your username and password to log in.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 px-4 py-6">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            {/* <Input id="username" placeholder="Enter Username" required type="text" /> */}
            <Input id="username" name="username" placeholder="Enter Username" required type="text" />

          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" placeholder="Enter Password" required type="password" />
            {/* <Input id="password"  placeholder="Enter Password" required type="password" /> */}
          </div>
        </CardContent>
        <CardFooter className="p-4">
        {/* <Link href="/dashboard" className="w-full">
        <Button className="w-full">
          Log In
        </Button>
      </Link> */}
          <Button className="w-full" type="submit" >Log In</Button>
        </CardFooter>
      </Card>
    </div>
    </form>

    
  )
}

