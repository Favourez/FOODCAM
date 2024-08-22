document.addEventListener('DOMContentLoaded', function() {
    // Example of dynamically setting user profile data
    const userName = "John Doe";
    const userEmail = "johndoe@example.com";
    const userBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.";

    // Set user profile data
    document.getElementById('user-name').textContent = userName;
    document.getElementById('user-email').textContent = userEmail;
    document.getElementById('user-bio').textContent = userBio;

    // Event listener for the "Edit Profile" button
    document.getElementById('edit-profile').addEventListener('click', function() {
        // Show the modal
        $('#editProfileModal').modal('show');
    });

    // Event listener for the "Save Changes" button in the modal
    document.getElementById('save-changes').addEventListener('click', function() {
        const newName = document.getElementById('new-name').value;
        const newEmail = document.getElementById('new-email').value;
        const newBio = document.getElementById('new-bio').value;

        // Update profile information
        document.getElementById('user-name').textContent = newName;
        document.getElementById('user-email').textContent = newEmail;
        document.getElementById('user-bio').textContent = newBio;

        // Hide the modal
        $('#editProfileModal').modal('hide');
    });
});
