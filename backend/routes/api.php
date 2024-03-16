<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Example route to fetch all portfolio items
Route::get('/portfolio', function () {
    // Logic to fetch all portfolio items from the database
    $portfolioItems = App\Models\PortfolioItem::all();

    // Return the portfolio items as JSON response
    return response()->json($portfolioItems);
});

// Example route to fetch a single portfolio item by ID
Route::get('/portfolio/{id}', function ($id) {
    // Logic to fetch a single portfolio item by ID from the database
    $portfolioItem = App\Models\PortfolioItem::findOrFail($id);

    // Return the portfolio item as JSON response
    return response()->json($portfolioItem);
});

// Example route to create a new portfolio item
Route::post('/portfolio', function (Request $request) {
    // Validate the incoming request data
    $validatedData = $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'required|string',
        // Add more validation rules for other fields
    ]);

    // Create a new portfolio item using the validated data
    $portfolioItem = App\Models\PortfolioItem::create($validatedData);

    // Return the newly created portfolio item as JSON response
    return response()->json($portfolioItem, 201);
});

// Example route to update an existing portfolio item
Route::put('/portfolio/{id}', function (Request $request, $id) {
    // Validate the incoming request data
    $validatedData = $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'required|string',
        // Add more validation rules for other fields
    ]);

    // Find the portfolio item by ID and update it with the validated data
    $portfolioItem = App\Models\PortfolioItem::findOrFail($id);
    $portfolioItem->update($validatedData);

    // Return the updated portfolio item as JSON response
    return response()->json($portfolioItem);
});

// Example route to delete a portfolio item
Route::delete('/portfolio/{id}', function ($id) {
    // Find the portfolio item by ID and delete it
    $portfolioItem = App\Models\PortfolioItem::findOrFail($id);
    $portfolioItem->delete();

    // Return a success message as JSON response
    return response()->json(['message' => 'Portfolio item deleted successfully']);
});

// Add more routes as needed for your application
?>