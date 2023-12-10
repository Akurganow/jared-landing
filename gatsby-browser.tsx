import './src/styles/common.css'
import React from 'react'
import Layout from './src/components/Layout'

export const wrapPageElement = ({ element, props }: { element: React.ReactNode, props: any }) => {
	return <Layout {...props}>{element}</Layout>
}
