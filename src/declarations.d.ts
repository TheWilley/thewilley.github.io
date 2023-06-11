interface Posts {
    data: [
        {
            id: string
            attributes: {
                contents: string
                title: string
                thumbnail: {
                    data: {
                        attributes: {
                            url: string
                        }
                    }
                }
                descritpion: string
                publishedAt: string
                updatedAt: string
            }
        }
    ]
}

interface Post {
    data: {
        id: string
        attributes: {
            contents: string
            title: string
            thumbnail: {
                data: {
                    attributes: {
                        url: string
                    }
                }
            }
            descritpion: string
            publishedAt: string
            updatedAt: string
        }
    }
}
