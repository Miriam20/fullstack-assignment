import { Post } from '../types';

export class PostsServices {
  setBorder(posts: Post[]) {
    const minTriplet = {
      firstIndex: 0,
      lengthSum: 9999999,
    };

    for (let i = 0; i < posts.length - 2; i++) {
      const currentTripletLengthSum =
        posts[i].title.length +
        posts[i + 1].title.length +
        posts[i + 2].title.length;

      if (currentTripletLengthSum < minTriplet.lengthSum) {
        minTriplet.firstIndex = i;
        minTriplet.lengthSum = currentTripletLengthSum;
      }
    }
    posts[minTriplet.firstIndex].border = true;
    posts[minTriplet.firstIndex + 1].border = true;
    posts[minTriplet.firstIndex + 2].border = true;
  }
}
