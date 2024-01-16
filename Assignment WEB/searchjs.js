<script>
  $(document).ready(function () {
    $("#searchForm").submit(function (event) {
      event.preventDefault();

      // Get the search input value
      var searchTerm = $("#searchInput").val().toLowerCase();

      // Hide all news cards
      $(".column").hide();

      if (searchTerm === "sport") {
        $(".column[data-category='sport']").show();
        $("#noResultsMessage").hide();
      } else if (searchTerm === "business") {
        $(".column[data-category='business']").show();
        $("#noResultsMessage").hide();
      } else if (searchTerm === "tech") {
        $(".column[data-category='tech']").show();
        $("#noResultsMessage").hide();
      } else if (searchTerm === "national") {
        $(".column[data-category='national']").show();
        $("#noResultsMessage").hide();
      } else if (searchTerm === "international") {
        $(".column[data-category='international']").show();
        $("#noResultsMessage").hide();
      } else {
        // Show "No results found" if the search term doesn't match any category
        $("#noResultsMessage").show();
      }
    });
  });
</script>
