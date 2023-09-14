const deletedPost = async (post_id) => {
    const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
    
    if(response.ok) {
        document.location.reload();
    } else {
        alert('Failed to delete post.')
    }
}

const deletedPostHandler = (event) => {
    if(event.target.matcher('.deleted-post-id')) {
        const post_id = event.target.getAttribute('data-post-id');
        deletedPost(post_id);
    }
}

document.addEventListener('click', deletedPostHandler);