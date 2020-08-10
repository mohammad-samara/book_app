DROP TABLE IF EXISTS books ;

CREATE TABLE books  (
    id SERIAL PRIMARY KEY,
    author VARCHAR(255),
    title VARCHAR(255),
    isbn VARCHAR(255),
    image_url VARCHAR(255),
    description VARCHAR(500),
    bookshelf VARCHAR(255)
  );

  INSERT INTO books (author, title, isbn, image_url, description, bookshelf)
VALUES ('Heather Angel', 'How to Photograph Flowers','ISBN_10 0811724557','http://books.google.com/books/content?id=Vrl13goK-VcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api','Heather Angel, internationally known nature photographer and author, describes equipment, film, lighting, composition, and special techniques for photographing flowers in the wild and in gardens. Straightforward explanations focus on the particular challenges of taking beautiful flower photographs, such as wind, light, and problem colors. The book also includes tips on making money from nature photography. 131 color photos.','Photography');

INSERT INTO books (author, title, isbn, image_url, description, bookshelf)
VALUES ('Nicki', 'Running for My Life', 'ISBN_13 9781796083729', 'https://books.google.com/books/content?id=3tDMDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'Grandma always said experience as the world"s best teacher it can make you or it can break you. Looking back on my life experience. It made me the person I am today. I have my self-esteem back. No longer will I ever be a victim of any kind of abuse. I know now that I"m someone special. I no longer feel guilty about the things I have no control over.', 'Fiction');