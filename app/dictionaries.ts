import 'server-only'

export const getDictionary = async (locale: any, file: any) => import(`./dictionaries/${locale}/${file}.json`).then((module) => module.default)