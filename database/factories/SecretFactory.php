<?php

namespace Database\Factories;

use App\Models\Secret;
use Illuminate\Database\Eloquent\Factories\Factory;

class SecretFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Secret::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'secret' => $this->faker->text(),
        ];
    }
}
