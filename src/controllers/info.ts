import { Context } from 'hono'
import packageInfo from '../../package.json'

type serverInfo = {
	name: string
	version: string
	node: string
}

function getInfo(ctx: Context): Response {
	const { name, version } = packageInfo
	const info: serverInfo = {
		name,
		version,
		node: process.versions.node,
	}

	return ctx.json(info, 200)
}

export default { getInfo }
