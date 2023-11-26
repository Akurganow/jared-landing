import { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
	const { city, country } = context.params;

	const response = {
		city,
		country,
		geo: context.geo
	};

	return new Response(JSON.stringify(response), { status: 200 });
};

export const config: Config = {
	path: "/geo/:city/:country"
};
