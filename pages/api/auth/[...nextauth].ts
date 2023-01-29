import React from 'react'
import NextAuth from 'next-auth/next'
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"



export default NextAuth({
    providers: [
        GithubProvider({
      clientId: 'fe14a853bf703ad85715',
      clientSecret: '04cdd4ec7cb2556ca38e7a6da5629bda315a1646',
      // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
      // @ts-ignore
      scope: "read:user",
    }),
    
    // GoogleProvider({
    //   clientId: '',
    //   clientSecret: '',
    // }),
    ]
})