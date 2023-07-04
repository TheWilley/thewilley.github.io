/*/
    Declarations file

    Declares all types and interfaces
/*/

// Declaration for all blog posts
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
                            formats: {
                                small: {
                                    url: string
                                }
                                medium: {
                                    url: string
                                }
                                large: {
                                    url: string
                                }
                            }
                            url: string
                        }
                    }
                }
                description: string
                publishedAt: string
                updatedAt: string
            }
        }
    ]
}

// Declaration for a single blog post
interface Post {
    data: {
        id: string
        attributes: {
            contents: string
            title: string
            thumbnail: {
                data: {
                    attributes: {
                        formats: {
                            small: {
                                url: string
                            }
                            medium: {
                                url: string
                            }
                            large: {
                                url: string
                            }
                        }
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

// Declaration for GitHub repos
interface Repo {
    description: string
    name: string
    homepage: string
    html_url: string
}

// Declaration for the configuration
interface Configuration {
    endpoint_url: string
    github_username: string
}

// Declaration for the timeline
interface Timeline {
    data: {
        id: string
        attributes: {
            data: {
                messages: [
                    {

                        id: string;
                        type: string;
                        author: {
                            id: string;
                            name: string;
                            color: string;
                            isBot: boolean;
                            nickname: string;
                            avatarUrl: string;
                            discriminator: string;
                        };
                        content: string;
                        isPinned: boolean;
                        timestamp: string;
                        timestampEdited: string | null;
                        callEndedTimestamp: string | null;
                    }
                ]
            }
        }

    }
}

