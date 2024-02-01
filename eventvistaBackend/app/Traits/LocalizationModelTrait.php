<?php

namespace App\Traits;

trait LocalizationModelTrait
{
    public function collectLocalization($entity = '', $lang_key = '')
    {
        
        $lang_key = $lang_key == '' ? app()->getLocale() : $lang_key;
        
        $localization = $this->localization->where('lang_key', $lang_key)->first();

        return $localization != null && $localization->$entity ? $localization->$entity : $this->$entity;
    }
}
