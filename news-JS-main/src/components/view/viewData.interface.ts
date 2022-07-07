import {Source} from './sources/source.interface'
import {Article} from './news/article.interface'

export interface SourcesData {
    sources: Source[],
    status: string
}

export interface NewsData {
    articles: Article[],
    status: string,
    totalResults: number
}