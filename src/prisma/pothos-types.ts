/* eslint-disable */
import type { Prisma, Account, User, Profile, VerificationToken, Session, Location, Friend, Tag, Image, Media, Comment, Like, Post, Category } from "@prisma/client";
export default interface PrismaTypes {
    Account: {
        Name: "Account";
        Shape: Account;
        Include: Prisma.AccountInclude;
        Select: Prisma.AccountSelect;
        OrderBy: Prisma.AccountOrderByWithRelationInput;
        WhereUnique: Prisma.AccountWhereUniqueInput;
        Where: Prisma.AccountWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
            };
        };
    };
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: "posts" | "profile" | "friends" | "comments" | "likes" | "mentions" | "accounts" | "sessions";
        ListRelations: "posts" | "friends" | "comments" | "likes" | "mentions" | "accounts" | "sessions";
        Relations: {
            posts: {
                Shape: Post[];
                Name: "Post";
            };
            profile: {
                Shape: Profile | null;
                Name: "Profile";
            };
            friends: {
                Shape: Friend[];
                Name: "Friend";
            };
            comments: {
                Shape: Comment[];
                Name: "Comment";
            };
            likes: {
                Shape: Like[];
                Name: "Like";
            };
            mentions: {
                Shape: Tag[];
                Name: "Tag";
            };
            accounts: {
                Shape: Account[];
                Name: "Account";
            };
            sessions: {
                Shape: Session[];
                Name: "Session";
            };
        };
    };
    Profile: {
        Name: "Profile";
        Shape: Profile;
        Include: Prisma.ProfileInclude;
        Select: Prisma.ProfileSelect;
        OrderBy: Prisma.ProfileOrderByWithRelationInput;
        WhereUnique: Prisma.ProfileWhereUniqueInput;
        Where: Prisma.ProfileWhereInput;
        Create: {};
        Update: {};
        RelationName: "location" | "user";
        ListRelations: never;
        Relations: {
            location: {
                Shape: Location | null;
                Name: "Location";
            };
            user: {
                Shape: User;
                Name: "User";
            };
        };
    };
    VerificationToken: {
        Name: "VerificationToken";
        Shape: VerificationToken;
        Include: never;
        Select: Prisma.VerificationTokenSelect;
        OrderBy: Prisma.VerificationTokenOrderByWithRelationInput;
        WhereUnique: Prisma.VerificationTokenWhereUniqueInput;
        Where: Prisma.VerificationTokenWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    Session: {
        Name: "Session";
        Shape: Session;
        Include: Prisma.SessionInclude;
        Select: Prisma.SessionSelect;
        OrderBy: Prisma.SessionOrderByWithRelationInput;
        WhereUnique: Prisma.SessionWhereUniqueInput;
        Where: Prisma.SessionWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User | null;
                Name: "User";
            };
        };
    };
    Location: {
        Name: "Location";
        Shape: Location;
        Include: Prisma.LocationInclude;
        Select: Prisma.LocationSelect;
        OrderBy: Prisma.LocationOrderByWithRelationInput;
        WhereUnique: Prisma.LocationWhereUniqueInput;
        Where: Prisma.LocationWhereInput;
        Create: {};
        Update: {};
        RelationName: "profile";
        ListRelations: "profile";
        Relations: {
            profile: {
                Shape: Profile[];
                Name: "Profile";
            };
        };
    };
    Friend: {
        Name: "Friend";
        Shape: Friend;
        Include: Prisma.FriendInclude;
        Select: Prisma.FriendSelect;
        OrderBy: Prisma.FriendOrderByWithRelationInput;
        WhereUnique: Prisma.FriendWhereUniqueInput;
        Where: Prisma.FriendWhereInput;
        Create: {};
        Update: {};
        RelationName: "friend";
        ListRelations: never;
        Relations: {
            friend: {
                Shape: User;
                Name: "User";
            };
        };
    };
    Tag: {
        Name: "Tag";
        Shape: Tag;
        Include: Prisma.TagInclude;
        Select: Prisma.TagSelect;
        OrderBy: Prisma.TagOrderByWithRelationInput;
        WhereUnique: Prisma.TagWhereUniqueInput;
        Where: Prisma.TagWhereInput;
        Create: {};
        Update: {};
        RelationName: "author" | "comment";
        ListRelations: never;
        Relations: {
            author: {
                Shape: User;
                Name: "User";
            };
            comment: {
                Shape: Comment | null;
                Name: "Comment";
            };
        };
    };
    Image: {
        Name: "Image";
        Shape: Image;
        Include: Prisma.ImageInclude;
        Select: Prisma.ImageSelect;
        OrderBy: Prisma.ImageOrderByWithRelationInput;
        WhereUnique: Prisma.ImageWhereUniqueInput;
        Where: Prisma.ImageWhereInput;
        Create: {};
        Update: {};
        RelationName: "media";
        ListRelations: never;
        Relations: {
            media: {
                Shape: Media;
                Name: "Media";
            };
        };
    };
    Media: {
        Name: "Media";
        Shape: Media;
        Include: Prisma.MediaInclude;
        Select: Prisma.MediaSelect;
        OrderBy: Prisma.MediaOrderByWithRelationInput;
        WhereUnique: Prisma.MediaWhereUniqueInput;
        Where: Prisma.MediaWhereInput;
        Create: {};
        Update: {};
        RelationName: "image" | "post";
        ListRelations: "image";
        Relations: {
            image: {
                Shape: Image[];
                Name: "Image";
            };
            post: {
                Shape: Post | null;
                Name: "Post";
            };
        };
    };
    Comment: {
        Name: "Comment";
        Shape: Comment;
        Include: Prisma.CommentInclude;
        Select: Prisma.CommentSelect;
        OrderBy: Prisma.CommentOrderByWithRelationInput;
        WhereUnique: Prisma.CommentWhereUniqueInput;
        Where: Prisma.CommentWhereInput;
        Create: {};
        Update: {};
        RelationName: "author" | "post" | "mention";
        ListRelations: "mention";
        Relations: {
            author: {
                Shape: User;
                Name: "User";
            };
            post: {
                Shape: Post | null;
                Name: "Post";
            };
            mention: {
                Shape: Tag[];
                Name: "Tag";
            };
        };
    };
    Like: {
        Name: "Like";
        Shape: Like;
        Include: Prisma.LikeInclude;
        Select: Prisma.LikeSelect;
        OrderBy: Prisma.LikeOrderByWithRelationInput;
        WhereUnique: Prisma.LikeWhereUniqueInput;
        Where: Prisma.LikeWhereInput;
        Create: {};
        Update: {};
        RelationName: "author" | "post";
        ListRelations: never;
        Relations: {
            author: {
                Shape: User;
                Name: "User";
            };
            post: {
                Shape: Post;
                Name: "Post";
            };
        };
    };
    Post: {
        Name: "Post";
        Shape: Post;
        Include: Prisma.PostInclude;
        Select: Prisma.PostSelect;
        OrderBy: Prisma.PostOrderByWithRelationInput;
        WhereUnique: Prisma.PostWhereUniqueInput;
        Where: Prisma.PostWhereInput;
        Create: {};
        Update: {};
        RelationName: "likes" | "comments" | "media" | "category" | "author";
        ListRelations: "likes" | "comments" | "media" | "category";
        Relations: {
            likes: {
                Shape: Like[];
                Name: "Like";
            };
            comments: {
                Shape: Comment[];
                Name: "Comment";
            };
            media: {
                Shape: Media[];
                Name: "Media";
            };
            category: {
                Shape: Category[];
                Name: "Category";
            };
            author: {
                Shape: User;
                Name: "User";
            };
        };
    };
    Category: {
        Name: "Category";
        Shape: Category;
        Include: Prisma.CategoryInclude;
        Select: Prisma.CategorySelect;
        OrderBy: Prisma.CategoryOrderByWithRelationInput;
        WhereUnique: Prisma.CategoryWhereUniqueInput;
        Where: Prisma.CategoryWhereInput;
        Create: {};
        Update: {};
        RelationName: "post";
        ListRelations: never;
        Relations: {
            post: {
                Shape: Post | null;
                Name: "Post";
            };
        };
    };
}