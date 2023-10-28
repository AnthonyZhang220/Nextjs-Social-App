export const typeDefs = /* GraphQL */ `
	type User {
		id: String
		username: String
		displayName: String
		email: String
		createdAt: DateTime
		posts: [Post]
		profile: Profile
		friends: [Friend]
		comment: [Comment]
		like: [Like]
		mention: [Tag]
	}

	type Post {
		id: String
		createdAt: DateTime
		updatedAt: DateTime
		title: String
		content: String
		draft: Boolean
		like: [Like]
		comment: [Comment]
		media: [Media]
		view: Int
		author: User
		authorId: String
	}

	type Profile {
		id: String
		photo: String
		bio: String
		location: Location
		locationId: Int
		user: User
		userId: String
	}

	type Location {
		id: Int
		name: String
		latitude: Float
		longitude: Float
		city: String
		country: String
		Profile: [Profile]
	}

	type Query {
		allPost: [Post]
		getPostByCatogories: [Post]
	}

	type Mutation {
		addUser(username: String, password: String): User
		addPost(id: String): Post
		followUser(id: String): User
	}
`;
