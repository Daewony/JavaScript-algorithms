function getAlarms(members, logs) {
  const alarmSettings = {};
  const result = {};
  const articleInfo = {};
  const commentToArticle = {};
  const commentWriters = {};
  const subCommentWriters = {};

  for (const m of members) {
    alarmSettings[m] = { ARTICLE: true, COMMENT: true };
    result[m] = 0;
  }

  for (const log of logs) {
    const [member, action, id, ref] = log;

    if (action === "ALARM") {
      alarmSettings[member][id] = !alarmSettings[member][id];
    } else if (action === "ARTICLE") {
      articleInfo[id] = {
        writer: member,
        comments: new Set(),
        sub_comments: new Set(),
        count: 0,
        popular: false,
      };
    } else if (action === "COMMENT") {
      const article = articleInfo[ref];
      article.comments.add(member);
      article.count += 1;
      commentToArticle[id] = ref;
      commentWriters[id] = member;
      subCommentWriters[id] = new Set();

      if (!article.popular && article.count >= 5) {
        article.popular = true;
      }

      const targets = new Set();
      targets.add(article.writer);
      for (const user of article.comments) targets.add(user);
      for (const user of article.sub_comments) targets.add(user);
      targets.delete(member);

      for (const user of targets) {
        if (article.popular || alarmSettings[user].COMMENT) {
          result[user] += 1;
        }
      }
    } else if (action === "SUB_COMMENT") {
      const commentWriter = commentWriters[ref];
      const articleId = commentToArticle[ref];
      const article = articleInfo[articleId];
      article.sub_comments.add(member);
      article.count += 1;

      if (!article.popular && article.count >= 5) {
        article.popular = true;
      }

      subCommentWriters[ref].add(member);

      const targets = new Set();
      targets.add(commentWriter);
      for (const user of subCommentWriters[ref]) targets.add(user);
      targets.delete(member);

      for (const user of targets) {
        if (article.popular || alarmSettings[user].COMMENT) {
          result[user] += 1;
        }
      }
    }
  }

  return members.map((m) => result[m]);
}
