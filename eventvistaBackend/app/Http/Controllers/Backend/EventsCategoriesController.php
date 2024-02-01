<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Business\EventCategories;
use App\Models\Business\EventCategoriesLocalization;
use App\Models\Language;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class EventsCategoriesController extends Controller
{


    // category list
    public function index(Request $request)
    {

        $searchKey = null;
        $categories = new EventCategories();

        if ($request->search != null) {
            $categories = $categories->where('name', 'like', '%' . $request->search . '%');
            $searchKey = $request->search;
        }

        $categories = $categories->paginate(paginationNumber());

        return view('backend.events.categories.index', compact('categories', 'searchKey'));
    }

    // return view of create form
    public function create()
    {
        return view('backend.events.categories.create');
    }

    // add new data
    public function store(Request $request)
    {

        $rules = [
            'name' => 'required',
        ];

        $request->validate($rules);

        $category = new EventCategories();
        $category->name = $request->name;

        if ($request->slug != null) {
            $category->slug = Str::slug($request->slug);
        } else {
            $category->slug = Str::slug($request->name) . '-' . Str::random(5);
        }

        $category->save();
        $categoryLocalization = EventCategoriesLocalization::firstOrNew(['lang_key' => env('DEFAULT_LANGUAGE'), 'event_category_id' => $category->id]);
        $categoryLocalization->name = $category->name;
        $categoryLocalization->save();

        flash(localize('Category has been inserted successfully'))->success();

        return redirect()->route('admin.events.categories.index');
    }

    // return view of edit form
    public function edit(Request $request, $id)
    {
        $lang_key = $request->lang_key;
        $language = Language::where('is_active', 1)->where('code', $lang_key)->first();
        if (!$language) {
            flash(localize('Language you are trying to translate is not available or not active'))->error();

            return redirect()->route('admin.events.categories.index');
        }

        $category = EventCategories::findOrFail($id);

        return view('backend.events.categories.edit', compact('category', 'lang_key'));
    }

    // update category
    public function update(Request $request)
    {
        $rules = [
            'name' => 'required',
        ];

        $request->validate($rules);
        $category = EventCategories::findOrFail($request->id);

        if ($request->lang_key == env('DEFAULT_LANGUAGE')) {
            $category->name = $request->name;
            $category->slug = (!is_null($request->slug)) ? Str::slug($request->slug, '-') : Str::slug($request->name, '-') . '-' . strtolower(Str::random(5));
            $category->save();
        }

        $categoryLocalization = EventCategoriesLocalization::firstOrNew(['lang_key' => $request->lang_key, 'event_category_id' => $category->id]);
        $categoryLocalization->name = $request->name;
        $category->save();
        $categoryLocalization->save();

        flash(localize('Category has been updated successfully'))->success();

        return back();
    }

    // update status
    public function updateFeatured(Request $request)
    {
        $category = EventCategoriesLocalization::findOrFail($request->id);
        $category->is_featured = $request->status;
        if ($category->save()) {
            return 1;
        }

        return 0;
    }

    // delete category
    public function delete($id)
    {
        $eventCat = EventCategories::where('id', $id)->delete();

        if ($eventCat) {
            flash(localize('Category has been deleted successfully'))->success();
        } else {
            flash(localize('This category can not be deleted'))->success();
        }

        return back();
    }
}
