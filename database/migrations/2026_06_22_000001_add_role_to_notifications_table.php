<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * Adds the missing 'role' column to the notifications table.
     * The column was defined in the original create migration but was
     * not present in the production database, causing SQLSTATE[42S22]
     * errors when creating Notification records.
     */
    public function up(): void
    {
        Schema::table('notifications', function (Blueprint $table) {
            if (!Schema::hasColumn('notifications', 'role')) {
                // Insert after user_id to match the original schema definition order
                $table->string('role')->default('learner')->after('user_id');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('notifications', function (Blueprint $table) {
            if (Schema::hasColumn('notifications', 'role')) {
                $table->dropColumn('role');
            }
        });
    }
};
