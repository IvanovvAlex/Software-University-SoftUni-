function solve() {
    class Post {
        constructor(title, content) {
            this._title = title;
            this._content = content;
        }

        get content() {
            return this._content;
        }

        set content(value) {
            this._content = value;
        }

        get title() {
            return this._title;
        }

        set title(value) {
            this._title = value;
        }

        toString() {
            return `Post: ${this._title}\nContent: ${this._content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let result = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}\n`;
            
            if (this.comments.length > 0) {
                let temp = '';
                for (let i = 0; i < this.comments.length; i++) {
                    temp += ' * ' + this.comments[i] + '\n';
                }

                result += temp;
            }

            return result;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

const classes = solve();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
