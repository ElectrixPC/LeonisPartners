# LeonisPartners

## The only thing certain in life are death and taxes. 

### This site utilizes:

- Wordpress for site editing 
- PHP (Backend)
- JS (Front End)


## An idiot's guide to LeonisPartners

### Creating a new news post
Click ‘News’ at the top of the left sidebar and then hit ‘Add News’ – Then type what you want to type: i.e. ‘Vote Trump 2020’

### Adding a single transaction to a news post
You can add a singular tranasaction to enhance your news post (Ideal if you’re discussing a press release) by typing [transaction-single id=”THE_ID”] – You will need to replace THE_ID with the actual ID of the transaction. You can get this by going into the transaction and looking at the URL in the top bar of your browser. For example, for the FaceRig transaction, the URL of the Edit Post page is: http://leonispartners.com/wp-admin/post.php?post=368&action=edit i.e the ID is 368

### Adding a download to a news post that asks for the users email
To do this, you will need to upload the download by going to ‘Downloads on the left bar (its around the middle) and hit ‘Add New’ – You will then type the title (In the Download Title) and then click ‘Add file’, and then ‘Upload File’. Once you’ve done that note down the ID that is in the ‘Shortcode’ section on the top right of the page, you’ll need this in a second to add the download on the page. 

You then need to go to your news post that you want to add the download to, and type [email id="THE_ID"] – And then replace THE_ID with the id that you have noted. E.g. [email id=”296”] This will then add it to the page once it goes live, and create a field for the user to type their info in and receive the download via email.

### Adding a download to the main News & Research as a main download

Note down the download ID that you will have uploaded to the ‘Downloads’ section (see previous section for more info if you are stuck) and then edit the page ‘News & Research’, and change the ID of the ‘news-downloads’ – its in chronological order so if you want to change the middle download, change the middle ID. E.g. [news-downloads id1="351" id2="353" id3="355"] changed to [news-downloads id1="351" id2="364" id3="355"]
