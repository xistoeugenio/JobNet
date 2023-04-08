import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default async function useSignIn(data: any) {
  const result = await signIn("credentials", {
    ...data, redirect: false
  })
  if (result?.error) {
    throw new Error(result.error);
  } else {
    location.reload()
  }
}
