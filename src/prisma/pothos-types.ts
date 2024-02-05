/* eslint-disable */
import type { Prisma, Account, User, Friendship, Profile, VerificationToken, Session, Location, Tag, Image, Media, Comment, Like, Post, Category, Notification_Type, Notification, UserNotification } from "@prisma/client";
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
        RelationName: "posts" | "profile" | "friends" | "friendOf" | "comments" | "likes" | "mentions" | "accounts" | "sessions" | "userNotification" | "notification";
        ListRelations: "posts" | "friends" | "friendOf" | "comments" | "likes" | "mentions" | "accounts" | "sessions" | "userNotification" | "notification";
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
                Shape: Friendship[];
                Name: "Friendship";
            };
            friendOf: {
                Shape: Friendship[];
                Name: "Friendship";
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
            userNotification: {
                Shape: UserNotification[];
                Name: "UserNotification";
            };
            notification: {
                Shape: Notification[];
                Name: "Notification";
            };
        };
    };
    Friendship: {
        Name: "Friendship";
        Shape: Friendship;
        Include: Prisma.FriendshipInclude;
        Select: Prisma.FriendshipSelect;
        OrderBy: Prisma.FriendshipOrderByWithRelationInput;
        WhereUnique: Prisma.FriendshipWhereUniqueInput;
        Where: Prisma.FriendshipWhereInput;
        Create: {};
        Update: {};
        RelationName: "friends" | "friendOf";
        ListRelations: never;
        Relations: {
            friends: {
                Shape: User;
                Name: "User";
            };
            friendOf: {
                Shape: User;
                Name: "User";
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
                Shape: Post;
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
    Notification_Type: {
        Name: "Notification_Type";
        Shape: Notification_Type;
        Include: Prisma.Notification_TypeInclude;
        Select: Prisma.Notification_TypeSelect;
        OrderBy: Prisma.Notification_TypeOrderByWithRelationInput;
        WhereUnique: Prisma.Notification_TypeWhereUniqueInput;
        Where: Prisma.Notification_TypeWhereInput;
        Create: {};
        Update: {};
        RelationName: "notification";
        ListRelations: "notification";
        Relations: {
            notification: {
                Shape: Notification[];
                Name: "Notification";
            };
        };
    };
    Notification: {
        Name: "Notification";
        Shape: Notification;
        Include: Prisma.NotificationInclude;
        Select: Prisma.NotificationSelect;
        OrderBy: Prisma.NotificationOrderByWithRelationInput;
        WhereUnique: Prisma.NotificationWhereUniqueInput;
        Where: Prisma.NotificationWhereInput;
        Create: {};
        Update: {};
        RelationName: "notificationType" | "sender" | "userNotification";
        ListRelations: "userNotification";
        Relations: {
            notificationType: {
                Shape: Notification_Type;
                Name: "Notification_Type";
            };
            sender: {
                Shape: User;
                Name: "User";
            };
            userNotification: {
                Shape: UserNotification[];
                Name: "UserNotification";
            };
        };
    };
    UserNotification: {
        Name: "UserNotification";
        Shape: UserNotification;
        Include: Prisma.UserNotificationInclude;
        Select: Prisma.UserNotificationSelect;
        OrderBy: Prisma.UserNotificationOrderByWithRelationInput;
        WhereUnique: Prisma.UserNotificationWhereUniqueInput;
        Where: Prisma.UserNotificationWhereInput;
        Create: {};
        Update: {};
        RelationName: "recipient" | "notification";
        ListRelations: never;
        Relations: {
            recipient: {
                Shape: User;
                Name: "User";
            };
            notification: {
                Shape: Notification;
                Name: "Notification";
            };
        };
    };
}