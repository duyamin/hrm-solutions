callback({
  "levelNumber": 36,
  "size": 30,
  "steps": 56,
  "successRatio": 1,
  "author": "ocoss",
  "hash": "5e7e1d258fcb12d72d3f448ab38278d0",
  "path": "36-Alphabetizer-39.109/30.65-ocoss.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 36-Alphabetizer - SIZE 30/39 - SPEED 65/109 --\n\na:\n    INBOX   \n    JUMPZ    b\n    COPYTO   [23]\n    BUMPUP   23\n    JUMP     a\nb:\n    COPYTO   22\nc:\n    INBOX   \n    JUMPZ    k\n    COPYTO   20\n    SUB      [22]\n    JUMPZ    d\n    JUMPN    g\n    JUMP     e\nd:\n    COPYFROM 20\n    OUTBOX  \n    BUMPUP   22\n    SUB      23\n    JUMPZ    l\n    JUMP     c\ne:\nf:\n    COPYFROM [22]\n    OUTBOX  \n    BUMPUP   22\n    SUB      23\n    JUMPZ    i\n    JUMP     f\ng:\n    COPYFROM 20\nh:\n    OUTBOX  \n    INBOX   \n    JUMPZ    j\n    JUMP     h\ni:\nj:\nk:\nl:\n\n\nDEFINE LABEL 22\neJxjY2BgUKnQmCZY2bZgfeW5PUAuQ0Ll/FyGUTAKRsGIAABaCAeo;\n\nDEFINE LABEL 23\neJzjZWBgUM/+GK6ezVM+O/PO7tmZnkcts2RPvM99fDq9r/siUJqhcdFCH8+lhROvLnu66vByiBg24FfF\nU65Zk1ooVrsu53iNaNqbqpr4hMqZsQ3FK2IyC2ri7fJE01JyHlSK5DRM2JxjNnVB7p8ZDcX3ZrWWm02t\nbfBrBplh0bEux6JjTa9Fx/S60s6m/JO9H8PZ+nVCHk6QDV05eUUMSE3NPLZ0qfnZjRwLWDrkF6/pXb1k\nTa/K8uedNquyGz+tbcr/tHZvNsvalxmaq0XT5q0UTQPpcVn4MkN+sWPyzKUBSbjcPwpGwUgEAA6HYgc;\n\n"
});